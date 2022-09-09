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

interface Project extends BaseEntity {
  title: string;
  description: string;
};

const artemis: Project = {
  id: '1',
  title: 'Artemis',
  description: 'Artemis Rocket'
};

const apollo: Project = {
  id: '2',
  title: 'Apollo',
  description: 'Apollo Rocket'
};

const projects: Project[] = [artemis, apollo];

const initialProject: Project = {
  id: null,
  title: '',
  description: ''
};

interface ProjectState {
  projects: Project[];
  initialProject: Project;
}

const projectState = {
  projects,
  initialProject
}

const tango = projectState;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
