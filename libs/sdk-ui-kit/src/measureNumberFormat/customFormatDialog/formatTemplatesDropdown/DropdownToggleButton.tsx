// (C) 2020 GoodData Corporation
import React from "react";
import { FormattedMessage } from "react-intl";
import cx from "classnames";

interface IDropdownToggleButtonProps {
    isOpened: boolean;
    toggleDropdown: () => void;
}

const DropdownToggleButton = ({ toggleDropdown, isOpened }: IDropdownToggleButtonProps) => (
    <div
        className="gd-measure-format-button gd-measure-format-button-templates s-measure-format-templates-toggle-button"
        onClick={toggleDropdown}
    >
        <span>
            <FormattedMessage id="measureNumberCustomFormatDialog.template.title" />
        </span>
        <div
            className={cx(
                "gd-measure-format-button-icon-right",
                isOpened ? "icon-navigateup" : "icon-navigatedown",
            )}
        />
    </div>
);

export default DropdownToggleButton;
