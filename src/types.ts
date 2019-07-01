export interface APIResponse {
  features: Feature[];
}

export interface Feature {
  properties: Properties;
}

export interface Properties {
  label: string;
  id: string;
  name: string;
  city: string;
}
