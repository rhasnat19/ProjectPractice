import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjecState] = useState({
    selectedProjectId: undefined,
    projectArray: [],
  });

  function handleStartAddProject() {
    setProjecState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjecState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onCancelProject={handleCancelProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
