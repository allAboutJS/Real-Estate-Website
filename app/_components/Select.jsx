"use client";

import { useEffect, useId, useReducer, useRef } from "react";

export default function Select({ errors, register, name, validations, setValue, ...props }) {
    const id = useId();
    const suggestionList = useRef(null);
    const inputRef = useRef(null);
    const { options, className, getValue, ...others } = props;
    const initialState = {
        showOptions: false,
        activeOptionIndex: -1,
        value: "",
        labelValue: ""
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "set_autocomplete_visibility":
                return { ...state, showOptions: action.payload };

            case "set_active_option_index":
                return { ...state, activeOptionIndex: action.payload };

            case "set_value":
                return { ...state, value: action.payload };

            case "set_label_value":
                return { ...state, labelValue: action.payload };

            case "reset_state":
                return { ...initialState, value: state.value, labelValue: state.labelValue };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleArrowDown = () => {
        if (state.activeOptionIndex >= options.length - 1)
            dispatch({ type: "set_active_option_index", payload: options.length - 1 });
        else dispatch({ type: "set_active_option_index", payload: state.activeOptionIndex + 1 });
    };

    const handleArrowUp = () => {
        if (state.activeOptionIndex <= 0) dispatch({ type: "set_active_option_index", payload: 0 });
        else dispatch({ type: "set_active_option_index", payload: state.activeOptionIndex - 1 });
    };

    const handleEnter = () => (
        dispatch({ type: "set_label_value", payload: options[state.activeOptionIndex].label }),
        dispatch({ type: "set_value", payload: options[state.activeOptionIndex].value })
    );

    const handleKeydown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleEnter();
            e.target.blur();
            dispatch({ type: "reset_state" });
        } else if (e.key === "ArrowUp") {
            handleArrowUp();
        } else if (e.key === "ArrowDown") {
            handleArrowDown();
        }
    };

    useEffect(() => {
        getValue && getValue(state.value);
        setValue && setValue(name, state.value);
    }, [state, options, getValue]);

    useEffect(() => {
        if (suggestionList.current) {
            const activeSuggestion = suggestionList.current.children[state.activeOptionIndex];
            if (activeSuggestion) activeSuggestion?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [state.activeOptionIndex]);

    return (
        <div className="relative input-field">
            <label htmlFor={props.id}>{props.label}</label>
            {register ? (
                <input type="text" className="hidden" {...register(name, validations)} value={state.value} />
            ) : (
                <input type="text" className="hidden" name={name} value={state.value} />
            )}
            <button
                type="button"
                aria-controls={id}
                aria-expanded={state.showOptions}
                aria-haspopup="listbox"
                onFocus={() => dispatch({ type: "set_autocomplete_visibility", payload: true })}
                onBlur={() =>
                    setTimeout(
                        () => (
                            dispatch({ type: "set_autocomplete_visibility", payload: false }),
                            dispatch({ type: "reset_state" })
                        ),
                        300
                    )
                }
                onKeyDown={handleKeydown}
                onChange={(e) => dispatch({ type: "set_label_value", payload: e.target.value })}
                className={`${props.className} w-full min-w-0 bg-slate-100 rounded-lg p-2 text-left`}
                {...others}
            >
                {state.labelValue || "Select an option"}
            </button>
            {errors && errors[name] && <small className="text-red-600">{errors && errors[name]?.message}</small>}
            {state.showOptions && (
                <ul
                    id={id}
                    ref={suggestionList}
                    className="absolute top-full bg-white w-full rounded-sm shadow-md z-10 text-sm max-h-40 overflow-x-clip overflow-y-auto"
                    role="listbox"
                >
                    {options?.map((option, index) => (
                        <li
                            id={`suggestion-${index}`}
                            role="option"
                            aria-selected={index === state.activeOptionIndex}
                            onClick={() => (
                                dispatch({ type: "set_value", payload: option.value }),
                                dispatch({ type: "set_label_value", payload: option.label }),
                                dispatch({ type: "reset_state" })
                            )}
                            key={option.value + Math.random().toString()}
                            tabIndex={0}
                            className={`${
                                index === state.activeOptionIndex && "bg-zinc-200"
                            } p-2 whitespace-nowrap text-ellipsis cursor-pointer hover:bg-zinc-200`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
