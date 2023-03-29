import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import ScholarTranslation from "./pages/ScholarTranslation/ScholarTranslation";
import Notes from "./pages/Notes/Notes";
import WordSearch from "./pages/WordSearch/WordSearch";
import WordbyWord from "./pages/WordbyWord/WordbyWord";
import AddTranslation from "./pages/AddTranslation/AddTranslation";
import MyTranslation from "./pages/MyTranslation/MyTranslation";
import UserSettings from "./pages/UserSettings/UserSettings";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import Layout from "./components/Layout/Layout";
import RootWordTranslation from "./pages/RootWordTranslation/RootWordTranslation";
import RefrenceWordTranslation from "./pages/RefrenceWordTranslation/RefrenceWordTranslation";
import Topics from "./pages/Topics/Topics";
import Home from "./pages/Home";
import AyatNotes from "./pages/AyatNotes/AyatNotes";
import WordNotes from "./pages/WordNotes/WordNotes";
import Verse from "./pages/Verse";
import UserPermission from "./pages/UserPermissions/UserPermissions";
import AdminPermissions from "./pages/AdminPermissions/AdminPermissions";
import GrammerNotes from "./pages/GrammerNotes/GrammerNotes";
import Stories from "./pages/Stories/Stories";
import StoryForm from "./pages/Stories/StoryForm/StoryForm";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/wordbyword"
          element={
            <Layout>
              <WordbyWord />
            </Layout>
          }
        />
        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route
          path="/notes"
          element={
            <Layout>
              <Notes isOpen={false} />
            </Layout>
          }
        />
        <Route
          path="/wordsearch"
          element={
            <Layout>
              <WordSearch />
            </Layout>
          }
        />
        <Route
          path="/usersettings"
          element={
            <Layout>
              <UserSettings />
            </Layout>
          }
        />
        <Route
          path="/schollartranslation"
          element={
            <Layout>
              <ScholarTranslation />
            </Layout>
          }
        />
        <Route
          path="/addtranslation"
          element={
            <Layout>
              <AddTranslation />
            </Layout>
          }
        />
        <Route
          path="/mytranslation"
          element={
            <Layout>
              <MyTranslation />
            </Layout>
          }
        />

        <Route
          path="/rootwords"
          element={
            <Layout>
              <RootWordTranslation />
            </Layout>
          }
        />
        <Route
          path="/refrencewords"
          element={
            <Layout>
              <RefrenceWordTranslation />
            </Layout>
          }
        />
        <Route
          path="/adminpermissions"
          element={
            <Layout>
              <AdminPermissions />
            </Layout>
          }
        />
        <Route
          path="/userpermissions"
          element={
            <Layout>
              <UserPermission />
            </Layout>
          }
        />
        <Route
          path="/topics"
          element={
            <Layout>
              <Topics />
            </Layout>
          }
        />
        <Route
          path="/ayatnotes"
          element={
            <Layout>
              <AyatNotes />
            </Layout>
          }
        />
        <Route
          path="/wordnotes"
          element={
            <Layout>
              <WordNotes />
            </Layout>
          }
        />
        <Route
          path="/grammernotes"
          element={
            <Layout>
              <GrammerNotes />
            </Layout>
          }
        />
        <Route
          path="/stories"
          element={
            <Layout>
              <Stories />
            </Layout>
          }
        />
        <Route
          path="/stories/add"
          element={
            <Layout>
              <StoryForm />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/:id"
          element={
            <Layout>
              <Verse />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
