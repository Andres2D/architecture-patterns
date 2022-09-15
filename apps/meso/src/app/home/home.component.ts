import { Component, OnInit } from '@angular/core';

interface BaseEntity {
  id: string | null;
};

interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string;
};


interface Action {
  type: string;
  payload?: any;
}

const peter: Client = {
  id: '1',
  firstName: 'Peter',
  lastName: 'Porker',
  company: 'Acme, Inc'
};

const john: Client = {
  id: '2',
  firstName: 'John',
  lastName: 'Doe',
  company: 'N/A'
};

interface ClientState {
  clients: Client[];
  currentClient: Client;
};

const newClient: Client = {
  id: null,
  firstName: '',
  lastName: '',
  company: ''
};

const clients: Client[] = [peter, john];

const initialClientsState: ClientState = {
  clients,
  currentClient: newClient
};

class ClientStore {

  state: ClientState;

  constructor(state: ClientState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
}

const CLIENT_LOAD    = '[Client] Load';
const CLIENT_CREATE  = '[Client] Create';
const CLIENT_UPDATE  = '[Client] Update';
const CLIENT_DELETE  = '[Client] Delete';
const CLIENT_SELECT  = '[Client] Select';
const CLIENT_CLEAR   = '[Client] Clear';

const loadClients = (state: ClientState, clients: any) => {
  console.log('Load clients', clients);
  return state;
}

const createClients = (state: ClientState, clients: any) => {
  console.log('Create clients', clients);
  return state;
}

const selectClients = (state: ClientState, clients: any) => {
  console.log('Select clients', clients);
  return state;
}

const updateClients = (state: ClientState, clients: any) => {
  console.log('Update clients', clients);
  return state;
}

const deleteClients = (state: ClientState, clients: any) => {
  console.log('Delete clients', clients);
  return state;
}

const clearClients = (state: ClientState, clients: any) => {
  console.log('Clear clients', clients);
  return state;
}

const clientsReducer = (state: ClientState = initialClientsState, action: Action) => {
  switch(action.type) {
    case CLIENT_LOAD: 
      return loadClients(state, action.payload);
    case CLIENT_SELECT: 
      return selectClients(state, action.payload);
    case CLIENT_CREATE: 
      return createClients(state, action.payload);
    case CLIENT_UPDATE: 
      return updateClients(state, action.payload);
    case CLIENT_DELETE: 
      return deleteClients(state, action.payload);
    case CLIENT_CLEAR: 
      return clearClients(state, action.payload);
    default:
      return state;
  }
}

const clientStore = new ClientStore(initialClientsState);
const currentClient = clientStore.select('currentClient');

interface Project extends BaseEntity {
  title: string;
  description: string;
  completed: boolean;
};

const artemis: Project = {
  id: '1',
  title: 'Artemis',
  description: 'Artemis Rocket',
  completed: false
};

const apollo: Project = {
  id: '2',
  title: 'Apollo',
  description: 'Apollo Rocket',
  completed: true
};

const projects: Project[] = [artemis, apollo];

const initialProject: Project = {
  id: null,
  title: '',
  description: '',
  completed: false
};

interface ProjectsState {
  projects: Project[];
  currentProject: Project;
};

const initialProjectState: ProjectsState = {
  projects,
  currentProject: initialProject
};

interface AppState  {
  clientState: ClientState;
  projectState: ProjectsState;
};

const appState: AppState = {
  clientState: initialClientsState,
  projectState: initialProjectState
};

const PROJECT_LOAD    = '[Project] Load';
const PROJECT_CREATE  = '[Project] Create';
const PROJECT_UPDATE  = '[Project] Update';
const PROJECT_DELETE  = '[Project] Delete';
const PROJECT_SELECT  = '[Project] Select';
const PROJECT_CLEAR   = '[Project] Clear';

const loadProjects = (state: ProjectsState, project: any) => {
  console.log('Load project', project);
  return state;
}

const createProjects = (state: ProjectsState, project: any) => {
  console.log('Create project', project);
  return state;
}

const selectProjects = (state: ProjectsState, project: any) => {
  console.log('Select project', project);
  return state;
}

const updateProjects = (state: ProjectsState, project: any) => {
  console.log('Update project', project);
  return state;
}

const deleteProjects = (state: ProjectsState, project: any) => {
  console.log('Delete project', project);
  return state;
}

const clearProjects = (state: ProjectsState, project: any) => {
  console.log('Clear project', project);
  return state;
}

class ProjectStore {
  state: ProjectsState;

  constructor(state: ProjectsState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
};

const projectStore = new ProjectStore(initialProjectState);
const projectsList = projectStore.select('projects');

const tango = projectsList;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
