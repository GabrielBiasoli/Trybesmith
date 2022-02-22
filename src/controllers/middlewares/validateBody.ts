import { Schema } from 'joi';

const validateBody = <T>(schema: Schema, body: T): (void | Error) => {
  const { error } = schema.validate(body);
  if (error) throw error;
};

export default validateBody;