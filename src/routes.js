import React from 'react';

/**
 * Views
 */
const DependencyExplorer = React.lazy(() => import('./views/MaterialDependencyExplorer/DependencyExplorer'));
const PackageOverview = React.lazy(() => import('./views/MaterialDependencyExplorer/PackageOverview'));

/**
 * Routes
 */
export const routes = [
  { path: '/', exact: true, name: 'Dependency Explorer'},
  { path: '/home', name: '', component: DependencyExplorer},
  { path: '/package', name: 'Package Overview', component: PackageOverview},
]

export default routes;
