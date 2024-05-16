import {
  validField,
  validEmail,
  compareField,
} from "@/controllers/ValidateController";

export function RegisterValidFirstname(value) {
  try {
    return validField(value);
  } catch (error) {
    throw new Error("Campo nome é obrigatório!.");
  }
}

export function RegisterValidLastname(value) {
  try {
    return validField(value);
  } catch (error) {
    throw new Error("Campo sobrenome é obrigatório!.");
  }
}

export function RegisterValidEmail(value) {
  try {
    return validEmail(value);
  } catch (error) {
    throw new Error("Campo de E-mail é obrigatório!");
  }
}

export function RegisterValidPassword(value) {
  try {
    return validEmail(value);
  } catch (error) {
    throw new Error("Campo senha é obrigatório!.");
  }
}

export function RegisterPassConfirm(pass, passconfirm) {
  try {
    return compareField(pass, passconfirm);
  } catch (error) {
    throw new Error("As senhas não confere!");
  }
}
