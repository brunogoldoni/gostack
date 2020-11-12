import React from 'react';
import { useRouteMatch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <h1>Repository: {params.repository}</h1>;
};

export default Repository;
