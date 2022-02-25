import React from 'react';
import {
  AiOutlineArrowLeft,
  AiOutlineMail,
  AiOutlineFolderOpen,
  AiOutlineFund,
  AiOutlineInbox,
  AiOutlineDelete
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
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
        <NavLink exact activeClassName="active" to="/inbox">
          <div className="sidebar-item">
            <AiOutlineMail />
            <div className="sidebar-title">Inbox</div>
          </div>
        </NavLink>
        <NavLink exact activeClassName="active" to="/processed">
          <div className="sidebar-item">
            <AiOutlineFolderOpen />
            <div className="sidebar-title">Processed</div>
          </div>
        </NavLink>
        <NavLink exact activeClassName="active" to="/patientreports">
          <div className="sidebar-item">
            <AiOutlineFund className="sidebar-icon1" />
            <div className="sidebar-title">Patient Reports</div>
          </div>
        </NavLink>
        <NavLink exact activeClassName="active" to="/archived">
          <div className="sidebar-item">
            <AiOutlineInbox />
            <div className="sidebar-title">Archived</div>
          </div>
        </NavLink>
        <NavLink exact activeClassName="active" to="/trash">
          <div className="sidebar-item">
            <AiOutlineDelete />
            <div className="sidebar-title">Trash</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
