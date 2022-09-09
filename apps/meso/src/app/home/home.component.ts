import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

interface BaseEntity {
  id: string | null;
};

interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string;
};

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

const tango = currentClient;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
