import { Schema } from 'joi';

const validateBody = <T>(schema: Schema, body: T): (void | Error) => {
  const { error } = schema.validate(body, { convert: false });
  if (error) throw error;
};

export default validateBody;