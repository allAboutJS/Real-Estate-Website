"use client";

import { useEffect, useId, useReducer, useRef } from "react";

export default function Autocomplete(props) {
    const id = useId();
    const suggestionList = useRef(null);
    const { options, className, getValue, ...others } = props;
    const initialState = {
        filteredOptions: options,
        showAutocomplete: false,
        activeOptionIndex: -1,
        value: "",
        labelValue: ""
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "set_filtered_options":
                return { ...state, filteredOptions: action.payload };

            case "set_autocomplete_visibility":
                return { ...state, showAutocomplete: action.payload };

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
        if (state.activeOptionIndex >= state.filteredOptions.length - 1)
            dispatch({ type: "set_active_option_index", payload: state.filteredOptions.length - 1 });
        else dispatch({ type: "set_active_option_index", payload: state.activeOptionIndex + 1 });
    };

    const handleArrowUp = () => {
        if (state.activeOptionIndex <= 0) dispatch({ type: "set_active_option_index", payload: 0 });
        else dispatch({ type: "set_active_option_index", payload: state.activeOptionIndex - 1 });
    };

    const handleEnter = () => (
        dispatch({ type: "set_label_value", payload: state.filteredOptions[state.activeOptionIndex].label }),
        dispatch({ type: "set_value", payload: state.filteredOptions[state.activeOptionIndex].value })
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
        const filteredOptions = options.filter(
            (option) =>
                option.label.toLowerCase().includes(state.labelValue.toLowerCase().trim()) ||
                option.value.toLowerCase().includes(state.labelValue.toLowerCase().trim())
        );

        dispatch({ type: "set_filtered_options", payload: filteredOptions });
        getValue && getValue(state.value);
    }, [options, getValue]);

    useEffect(() => {
        if (suggestionList.current) {
            const activeSuggestion = suggestionList.current.children[state.activeOptionIndex];
            if (activeSuggestion) activeSuggestion?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [state]);

    return (
        <div className="relative">
            <input
                aria-autocomplete="list"
                aria-controls={id}
                aria-activedescendant={state.showAutocomplete ? `option-${state.activeOptionIndex}` : undefined}
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
                type="text"
                value={state.labelValue}
                onKeyDown={handleKeydown}
                onChange={(e) => dispatch({ type: "set_label_value", payload: e.target.value })}
                className={`${props.className} w-full min-w-0`}
                {...others}
            />
            {state.showAutocomplete && (
                <ul
                    id={id}
                    ref={suggestionList}
                    className="absolute top-full bg-white w-full min-w-fit rounded-sm shadow-md z-10 text-sm max-h-40 overflow-x-clip overflow-y-auto"
                    role="listbox"
                >
                    {state.filteredOptions?.length ? (
                        state.filteredOptions?.map((option, index) => (
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
                        ))
                    ) : (
                        <li className="text-zinc-400 p-2 whitespace-nowrap text-ellipsis cursor-pointer text-center">
                            <i>No match found</i>
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
}
