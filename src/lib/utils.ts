// funciones de utilidad general, como es el formateo de fechas o de moneda

export function clamp(value: number, min: number, max: number) {
  // se asegura de que value permanezca entre el rango
  // min <= value && max >= value && value
  // value > max && max
  // value < min && min
  return Math.max(min, Math.min(value, max));
}
