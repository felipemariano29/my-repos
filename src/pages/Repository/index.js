import React, { useState, useEffect } from "react";
import {
  Container,
  Owner,
  Loading,
  BackButton,
  IssuesList,
  PageActions,
  FilterList,
} from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import api from "../../services/api";

export default function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([
    { state: "all", label: "Todas", active: true },
    { state: "open", label: "Abertas", active: false },
    { state: "closed", label: "Fechadas", active: false },
  ]);
  const [filtersSelected, setFiltersSelected] = useState(0);

  useEffect(() => {
    async function load() {
      const repositoryName = match.params.repository;

      const [repository, issues] = await Promise.all([
        api.get(`repos/${repositoryName}`),
        api.get(`repos/${repositoryName}/issues`, {
          params: {
            state: filters[filtersSelected].state,
            per_page: 5,
            page,
          },
        }),
      ]);

      setRepository(repository.data);
      setIssues(issues.data);
      setLoading(false);
    }

    load();
  }, [filtersSelected, filters, match.params.repository, page]);

  useEffect(() => {
    async function load() {
      const repositoryName = match.params.repository;

      const response = await api.get(`repos/${repositoryName}/issues`, {
        params: {
          state: "open",
          per_page: 5,
          page,
        },
      });

      setIssues(response.data);
    }

    load();
  }, [match.params.repository, page]);

  function handlePage(action) {
    if (action === "prev" && page > 1) {
      setPage(page - 1);
    } else if (action === "next") {
      setPage(page + 1);
    }
  }

  function handleFilter(index) {
    setFiltersSelected(index);
    setFilters(
      filters.map((filter, i) => {
        filter.active = index === i;
        return filter;
      })
    );
  }

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={20} />
      </BackButton>

      <Owner>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />

        <h1>{repository.name}</h1>

        <p>{repository.description}</p>
      </Owner>

      <FilterList active={filtersSelected}>
        {filters.map((filter, index) => (
          <button
            key={filter.label}
            type="button"
            onClick={() => handleFilter(index)}
          >
            {filter.label}
          </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>

              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button
          type="button"
          onClick={() => handlePage("prev")}
          disabled={page < 2}
        >
          Voltar
        </button>

        <button type="button" onClick={() => handlePage("next")}>
          Próxima
        </button>
      </PageActions>
    </Container>
  );
}
