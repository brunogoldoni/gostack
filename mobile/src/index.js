import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import api from "./services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      console.log(response.data);

      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post("projects", {
      title: `New project ${Date.now()}`,
      owner: "Bruno Goldoni",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project} key={project.title}>
              {project.title}
            </Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Add project</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7159c1",
    flex: 1,
  },

  project: {
    color: "#FFF",
    fontSize: 20,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#FFF",
    justifyContent: "center",
    margin: 20,
    height: 50,
    borderRadius: 4,
  },

  buttonText: {},
});
