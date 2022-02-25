import React from 'react';
import {
  AiOutlineArrowLeft,
  AiOutlineMail,
  AiOutlineFolderOpen,
  AiOutlineFund,
  AiOutlineInbox,
  AiOutlineDelete
} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/action/home';
import './sidebar.css';

const Sidebar = () => {
  const showMenu = useSelector((state) => state.home.showMenu);
  const dispatch = useDispatch();
  const backOnClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className={`Sidebar ${showMenu ? 'Closed' : ''}`}>
      <div className="sidebar-header">
        <AiOutlineArrowLeft
          className="sidebar-icon"
          onClick={backOnClick}
          onKeyDown={backOnClick}
          aria-hidden="true"
        />
        <div className="sidebar-back">Back</div>
      </div>
      <div className="sidebar-items">
        <div className="sidebar-item">
          <AiOutlineMail />
          <div className="sidebar-title">Inbox</div>
        </div>
        <div className="sidebar-item">
          <AiOutlineFolderOpen />
          <div className="sidebar-title">Processed</div>
        </div>
        <div className="sidebar-item">
          <AiOutlineFund className="sidebar-icon1" />
          <div className="sidebar-title">Patient Reports</div>
        </div>
        <div className="sidebar-item">
          <AiOutlineInbox />
          <div className="sidebar-title">Archived</div>
        </div>
        <div className="sidebar-item">
          <AiOutlineDelete />
          <div className="sidebar-title">Trash</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
