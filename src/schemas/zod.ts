import * as z from "zod";

const aminoAcidRegex = /^[ACDEFGHIKLMNPQRSTVWY-]+$/i;

export const alignmentSchema = z
  .object({
    firstInput: z
      .string()
      .nonempty("Поле обязательно")
      .regex(aminoAcidRegex, "Только латинские буквы аминокислот и дефис (-)"),
    secondInput: z
      .string()
      .nonempty("Поле обязательно")
      .regex(aminoAcidRegex, "Только латинские буквы аминокислот и дефис (-)"),
  })
  .superRefine(({ firstInput, secondInput }, ctx) => {
    if (firstInput.length !== secondInput.length) {
      ctx.addIssue({
        path: ["secondInput"],
        code: "custom",
        message: "Длины строк должны совпадать",
      });
    }
  });

export type AlignmentForm = z.infer<typeof alignmentSchema>;
