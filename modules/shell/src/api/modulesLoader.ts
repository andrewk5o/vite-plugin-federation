import { Module } from "../entity/module";

export const modulesLoader = async (): Promise<Module[]> => {
  return fetch("http://localhost:8080").then((res) => res.json());
};
