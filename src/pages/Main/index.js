import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import {
  Container,
  Form,
  SubmitButton,
  List,
  DeleteButton,
} from "../../styles";
import api from "../../services/api";

const Main = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const repositoriesStorage = localStorage.getItem("repositories");

    if (repositoriesStorage) {
      setRepositories(JSON.parse(repositoriesStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("repositories", JSON.stringify(repositories));
  }, [repositories]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      async function submit() {
        setLoading(true);
        setAlert(false);

        try {
          if (newRepo === "") {
            throw new Error("You must inform a repository");
          }

          const response = await api.get(`repos/${newRepo}`);

          const hasRepo = repositories.find(
            (repository) => repository.name === newRepo
          );

          if (hasRepo) {
            throw new Error("Repository already exists");
          }

          const data = {
            name: response.data.full_name,
          };

          setRepositories([...repositories, data]);
          setNewRepo("");
        } catch (error) {
          setAlert(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositories]
  );

  const handleDelete = useCallback(
    (repository) => {
      const find = repositories.filter((repo) => repo.name !== repository);

      setRepositories(find);

      localStorage.setItem("repositories", JSON.stringify(find));
    },
    [repositories]
  );

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setAlert(false);
  }

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit} error={alert ? 1 : 0}>
        <input
          type="text"
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repository) => (
          <li key={repository.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repository.name)}>
                {" "}
                <FaTrash size={14} />{" "}
              </DeleteButton>

              {repository.name}
            </span>

            <a href="">
              <FaBars size={14} />
            </a>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Main;
