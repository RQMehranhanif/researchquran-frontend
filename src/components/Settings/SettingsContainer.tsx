import React from "react";
import { Collapse } from "antd";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {
  faGear,
  faLanguage,
  faBookOpenReader,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
const { Panel } = Collapse;
const SettingsContainer = ({props}:{props:any}) => {  
  const isDarkTheme = useSelector(({ theme }: { theme: any }) => theme.dark);
  const innerLinks = {
    fontSize: '13px',
    cursor: 'pointer'
  }
  const roleid = localStorage.getItem("role_id")

  return (
    <>

      <Collapse
        ghost
        accordion
        expandIconPosition="end"
        bordered={true}
        defaultActiveKey={["0"]}
        className="site-collapse-custom-collapse "
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
      .ant-collapse-header{color: ${isDarkTheme ? "#aaa" : "#333"
              }!important; transition: color .5s ease-in-out !important;}
      .ant-select-selection-item{color: ${isDarkTheme ? "#aaa" : "rgba(17, 24, 39,.6)"
              }!important; transition: color .5s ease-in-out !important;}
    `,

          }}
        />
        {/* <Panel
          header={[
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: "25px" }}
              className="mr-4 float-left dark:text-white-500 "
            />,
            "All Users",
          ]}
          key="1"
          className="site-collapse-custom-panel  text-lg  text-gray-50 font-semibold  "
        >
          <div className="flex justify-center mb-3">
            {" "}
            <Link to='/users' onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Users
            </Link>
          </div>
        </Panel> */}

        <Panel
          header={[
            <FontAwesomeIcon
              icon={faBookOpenReader}
              style={{ fontSize: "25px" }}
              className="mr-4 float-left dark:text-white-500"
            />,
            "Q-Siyaam",
          ]}
          key="3"
          className="site-collapse-custom-panel text-lg  text-gray-50 font-semibold"
        >
          <div className="flex justify-center  mb-3  ">
            <Link to='/wordbyword' onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Word by Word
            </Link>
          </div>

          <div className="flex justify-center mb-3">
            <Link to='/wordsearch' onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Word Search
            </Link>
          </div>
          <div className="flex justify-center mb-3">
            <Link to="/schollartranslation" onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Scholar Translations
            </Link>
          </div>
        </Panel>
        <Panel
          header={[
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ fontSize: "25px" }}
              className="mr-4 float-left dark:text-white-500"
            />,
            "Translations",
          ]}
          key="4"
          className="site-collapse-custom-panel text-lg text-gray-50 font-semibold"
        >
          <div className="flex justify-center  mb-3  ">
            <Link to='/addtranslation' onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Add Translation
            </Link>
          </div>
          <div className="flex justify-center  mb-3  ">
            <Link to='/mytranslation' onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              My Translations
            </Link>
          </div>

          {/* <div className="flex justify-center mb-3">
            <Link to="/schollartranslation" onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Scholar Translations
            </Link>
          </div> */}
          <div className="flex justify-center mb-3">
            <Link to="/stories" onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Stories
            </Link>
          </div>
        </Panel>
        {/* <Panel
          header={[
            <FontAwesomeIcon
              icon={faUserTie}
              style={{ fontSize: "25px" }}
              className="mr-4 float-left dark:text-white-500"
            />,
            "Scholars",
          ]}
          key="5"
          className="site-collapse-custom-panel text-lg text-gray-50 font-semibold"
        >
          <div className="text-center"></div>
        </Panel> */}
        <Panel
          header={[
            <FontAwesomeIcon
              icon={faNotesMedical}
              style={{ fontSize: "25px" }}
              className="mr-4 float-left dark:text-white-500"
            />,
            "Scholar Notes",
          ]}
          key="6"
          className="site-collapse-custom-panel text-lg text-gray-50 font-semibold"
        >
          <div className="text-center">
            <Link to="/ayatnotes" onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Ayat Notes
            </Link>
          </div>
          <div className="text-center">
            <Link to="/wordnotes" onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Word Notes
            </Link>
          </div>
          <div className="text-center">
            <Link to="/grammernotes" onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Grammer Notes
            </Link>
          </div>
        </Panel>
        <Panel
          header={[
            <FontAwesomeIcon
              icon={faGear}
              style={{ fontSize: "25px" }}
              className="mr-4 float-left dark:text-white-500"
            />,
            "Settings",
          ]}
          key="7"
          className="site-collapse-custom-panel text-lg text-gray-50 font-semibold"
        >
          <div className="text-center">
            <Link to='/users' onClick={() => props?.setIsOpen(!props?.isOpen)} className=" mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Users
            </Link>
          </div>
          <div className="text-center">
            <Link to="/rootwords" onClick={() => props?.setIsOpen(!props?.isOpen)} className="mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500" style={innerLinks}>
              Root Words
            </Link>
          </div>
          <div className="text-center">
            <Link to="/refrencewords" onClick={() => props?.setIsOpen(!props?.isOpen)} className="mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500 " style={innerLinks}>
              Reference Words
            </Link>
          </div>
          {roleid === '1'?(
          <div className="text-center">
            <Link to="/adminpermissions" onClick={() => props?.setIsOpen(!props?.isOpen)} className="mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500 " style={innerLinks}>
              Impersonate Permissions
            </Link>
          </div>
          ):null
          }
          <div className="text-center">
            <Link to="/usersettings" onClick={() => props?.setIsOpen(!props?.isOpen)} className="mb-0 text-gray-600 " style={innerLinks}>
              Siyaam Settings
            </Link>
          </div>
        </Panel>
      </Collapse>
    </>
  );
};

export default SettingsContainer;
