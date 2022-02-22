import joi from 'joi';

const validate = <S, T>(scheema: S, obj: T): (void | Error) => {
  const { error } = joi.object(scheema).validate(obj);
  if (error) throw error;
};

export default validate;