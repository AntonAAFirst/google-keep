/** @format */

import React from "react";
import lamp from "../../shared/img/lamp.png";
import archive from "../../shared/img/archive.png";
import trash from "../../shared/img/trash.png";
import ControlPanelItem from "./ContolPanelItem";
import { useSelector } from "react-redux";
import {
  newFirstItemActive,
  newSecondItemActive,
  newThirdItemActive,
} from "../../shared/store/controlPanelReducer";

export default function ControlPanel() {
  const firstActive = useSelector((state) => state.controlPanel.firstItem);
  const secondActive = useSelector((state) => state.controlPanel.secondItem);
  const thirdActive = useSelector((state) => state.controlPanel.thirdItem);

  const controlPanelData = [
    {
      icon: lamp,
      text: "Заметки",
      link: "notes",
      active: firstActive,
      setCorrectActive: newFirstItemActive,
    },
    {
      icon: archive,
      text: "Архив",
      link: "archive",
      active: secondActive,
      setCorrectActive: newSecondItemActive,
    },
    {
      icon: trash,
      text: "Корзина",
      link: "trash",
      active: thirdActive,
      setCorrectActive: newThirdItemActive,
    },
  ];

  return (
    <div className="control-panel">
      {controlPanelData.map((item) => (
        <ControlPanelItem
          icon={item.icon}
          text={item.text}
          link={item.link}
          active={item.active}
          setCorrectActive={item.setCorrectActive}
        />
      ))}
    </div>
  );
}
