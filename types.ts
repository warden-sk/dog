/*
 * Copyright 2024 Marek Kobida
 * Last Updated: 27.09.2024
 */

type Message = {
  date: Date;
  hash: string;
  message: string;
  repository: Repository;
};

type Repository = {
  name: string;
  path: string;
  url?: string;
};

export type { Message, Repository };
