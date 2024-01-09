/*
 * Source: https://www.typescriptlang.org/play?ssl=1&ssc=1&pln=2&pc=1#code/PQKhFgCgAIWhlAwgJQPIBl3QCqpwCQFFoAhVbXAWQEIpZo64BeF1t9jzr7lxhmONgAWASwDO0AO4iANjOgAjAKbQArgDsAtgEMR6gC6712hTKUAaaGID20fUKUAnFdudXrmlY9VmJASWh1JSUAEztbADNrOWtJADo+PgBVfVkAfTh9AE8AByUJVxV1a30rPIBjEQiRcvDoAEF4bDFLBVVSwugAcyUgxxqceDVUmRFU-ISBaAA5DLtc-OhO4pCVCO1y-Wt+icSpwgA3JyzoAAVXMSU4JQAPCv0JMcf1HPbAkrry6wMjJfUTszaEJ6LpSUT6fI5Da7KZ8c6OS6ZBYSJRjByOaDOfSqRzqJZnC5KQiORzbAA8lHyYm0PQAfNBtvjsTkzNAANrTayrSzTW76eDWHHlJQAXUmsGAUCg2TyBIRTmJpMcJG0l2gTGgAG9oE4lQAuOzeFQAXwA3NKFnLLo5FeTKWJqT0dTcIeoQhIxPp+uoupYBUKVHzeu6rF6QerQ96uvSNfbHSoAGTQFLpABiMm0+mwCzJ8OttuVqsTWvcAYN-scwugxtp5sgMpUBbSSXUzg2QhMrI1eYVJPJACJ6g6nKlvgaW23yh3TCoG-3axbZU2W7d7qEAOK9Jw1eBhn0Rns2vuOMn9ld3JSbULdLf9WqeqPzPLzusN6BNwgXq8hMkAdQ7pRBm6Hp7r60D-k4gYusGIFRn6gqVlBrohg+IIxlavZKmSAAGn5rmEADkAAkmr-pmxoEUsEQQhixGkeiSgUdh8EBgukCLioKYyGk6aZtmeRktg6HYM6yESNYCgAFaXqUAD8JZsgA0tAejQAA1koWTWBEOAiuOIw8RmWY5tgSkivSxrQAa2AcdAAAaEZcYZfE5pq2h6gAjJZSaagoBoAEw1lK7H1pajTYJyqyCZaQEoaBlinKSORiOhTm8cZAnag21mWt5ZxJSlr6WrM0yqJ4d7oGMTjaDIZIAGo1aoSEwZGaERuFkVKKepXlTUlU0TV-aWNqByNUoBoNTITXVmxb6zCQeiuFkeHOA6IjfGSqA5KJLWoT6ljoEo1GWMgIhdEI+joR1XJdf2C3GI4y13KtYjreoQ0ltYeSONoboGltlhmNRBqHcdmJnRdBqnedpQ1nWtmEJm-5VWIULCmIZIVlWsWwW1TB0K1+44wgCFVvJh4Fqe574TefQDHtoJzvSeoE1jzXAdA2HQCRegRE4Mx8saXPyYj+jIxCqPQhjvIuszrOk0o8OhbKiDfKk6hNWSyD5D4+g8nyO0cwz6FstrYi65Yovi5CUtkjLl0ikrb49j1yiOGkeg0cYtXwqkNWG3FcEkwGAe4z6MYEwzofB4h0Ai8ezZBF+EIhJudPlLuj4szAMfY9BHPYQADDz6h8xi9tC3HGGu04HsGE43s4SRvsiDVxqF8xAuy1Z8sh8T2EeSXZdd-olfk4SNfu57Dc1U3mot23Hmd-bcs52z0fYf5Q-8xXwvV2Vbt117s-Yc3rh+zIxr+cvfKr9AufsyG2EAMzb+Xgt7y7B+19PuIn2fjgL7Gmfjfbu2d77r37gAFjfiPMe+9NCH1-o3U+89z6t0vlA0Bl0e5rwVhvAArLA3eVcv6IJ-vXP+tVUEL0vgQ7Bd8H4bwAGzEI-qQie38p6UJQQAoBzCGG4Igfg-uAB2NhLp4FkKQTw-+aDAEYONKIwR4CmH9wABwSNHp-Th5DuHH2oXwxR6iVG91jv3AAnFoqRuiZEGLnrQ40FjTE5zZLQliiFHbBWdrYpwmMRH50DnjSOoFo7r3jkqROq4ZIblvDuUJqjpEUPsf2D6bN6TEzZKkjxwoRQcPlEeLC-Y-DqFGqMMIGs9FpIVowpJ+iZ61WyQ-DJgSJBslQbzHeXChaWA6aXHeH88nyQ5GkHq25yj9WqrVSetJLZI3BDbdGdtb55NUcuVsSh2ydkVt4y0PZEoiB0I9FaVI3ppChM4AwDhXoAC9Qj+L7q0wm0Z1QhMfMTcJ74E7UxianOJGcEkE32f0I5T0cgvTORc3o9h8giDuSENIXwDB6E1j2eoIRgSpCOCctaG10lsVssCw5S0cWvW+OcwoVzYXwsRWrFFXUza62jmyCS0lNiWAZnkgAPhhQp2wVSXAjjnRlMhAJPJZVJGSHLQJDIJvfKOxMRX6DZB5IZXzIk-O-GncZmdwyqPvkqlVeT+4AEprF71NjrUVbJC4ijmWLBZkslkr1WXK9V2w0h4V+aeE1H1+zwmhdcuFoRSVvQ+oa1VjClVOz2YSA5oLQ14oCWJZ5Qr5WhI+fgiJHrNUp21XeXV+5VGQKedhAAFOa-Jlx40kueqc8lUKqW3PuVbR1aN8jLNlrU3xJ50m7NlD2SgusRAshqJmEQ2K624vUA88xTzjavJzgqp5nz1nRK1f8wtoJElxpBbW8F9aZ3pOZZ0jEoM9acxALA2hu9ZU53voO4do7yjjsnQe6dZJW0o3bRjG9t8WkprZKe6A0MLq9PNXe++UH2TzUWscqdZKZ39hAB9c9J0IaXXtdbJ1HaXVCKgx+ZO9z+yJvepYZDH0-1gKBbu4l8H32IdncKADLUgP9LPUdC92FgDXvQTVW9cc3WPtFSO0YL6sVEgQ29T98zv22yo5dFjHM2PD1A1xiDgn71QZGfdfdEKNr9mAKhzj6GYazPfLJiWP7O0O3w-fQj+FTykb9UZhKfGZAr3w0ShNUmk2sRPex6AaHOYAFJeMKP44MzT0HhOpGfa+yTDHpNfqs-J9zK8lMhhU-zNT4HNTAYE7JN198dNwbBfppDIXjNgzU+ZlLizcMrLs+692XrvxOd82R6A-YqtuYix52+XnaM+aS35xCBLlYqDRRisYE7EsVaY4-MOLz8ZLozSurNLWolEb+enLdQ35RDpE-FiTpHFuZbacB4L2EADU4WL6FaE4SdFmK5tnfqzh396X-0BdUxhvLBWotFa0yV2DD1yuHtPDd6rF7atYbbbbPD+qtttZTh10bXX+zQ76w9wbO7DtPrEwls7x7MlXZM5zAAtPdjBj2tPTde2+hbH3rMKdpBd9kwHcucw08D6DoO0i6fowt-slOYemYunVyzDXpZNeRw571JHOt+rFzj2neOaME+O0T07nXztK0JYSROkgfo5CVVrK1YrAOsqlc87lvKCwCqUGmkDlvmU2-ZXb6LUHl0pojWqtdO383xKzm6lntt-cc9SVXQ1trmsU2PFTJONMtgaS65H-D0b+1TcJIt6OC7VvpveRtkO2b3a5tiXtwFOcezG9N+bhns2meQ-D0s-FE23zhQPLn-sUDoDAGgH3m70APL0HUS+Wyan2pNCyf0GG-YvGQCAA
 */

/**
 * SCROLL TO THE BOTTOM!
 *
 * ===============================================
 *
 * This will be unmaintainable, so there are some rules I need to follow.
 *
 * Util_* types are not specific to ASTs, but are generic TS utilities.
 * N_* types are node factories.
 *
 * Every Parse* expects its input not to contain any leading whitespaces.
 *
 * Parse* types either return a ParseError<Message> or a tuple [Node, NextSource].
 */

type ParserErrorBase = {error: true};
type ParserError<Message extends string, Source extends string = string> = Message & Simplify<ParserErrorBase & {source: Source}>;
type Error_Unreachable = ParserError<'Assertion: Unreachable type'>;
type Error_UnexpectedGenericString = ParserError<'Unexpected generic string type'>;
type Error_Expected<What extends string, Where extends string, Source extends string> = ParserError<
  `Expected '${What}' after '${Where}'`,
  Source
>;

export type Simplify<T> = T extends object ? {[K in keyof T]: Simplify<T[K]>} : T;

type ASTNode<Type extends string, Props> = Simplify<{type: Type} & Props>;
type N_NumericLiteral<Value extends string> = ASTNode<'NumericLiteral', {value: Value}>;
type N_BinaryExpression<Op extends string, Left, Right> = ASTNode<'BinaryExpression', {operand: Op; left: Left; right: Right}>;

type EatWhitespaces<Source extends string> = string extends Source
  ? ParserError<'Unexpected generic string type'>
  : Source extends ` ${infer Next}`
    ? EatWhitespaces<Next>
    : Source;

// type Continue<Result, Next extends string> = [Result, EatWhitespaces<Next>];

type ParseNumber_internal<Partial extends string, Source extends string> = string extends Source
  ? Error_UnexpectedGenericString
  : Source extends `0${infer Next}`
    ? ParseNumber_internal<`${Partial}0`, Next>
    : Source extends `1${infer Next}`
      ? ParseNumber_internal<`${Partial}1`, Next>
      : Source extends `2${infer Next}`
        ? ParseNumber_internal<`${Partial}2`, Next>
        : Source extends `3${infer Next}`
          ? ParseNumber_internal<`${Partial}3`, Next>
          : Source extends `4${infer Next}`
            ? ParseNumber_internal<`${Partial}4`, Next>
            : Source extends `5${infer Next}`
              ? ParseNumber_internal<`${Partial}5`, Next>
              : Source extends `6${infer Next}`
                ? ParseNumber_internal<`${Partial}6`, Next>
                : Source extends `7${infer Next}`
                  ? ParseNumber_internal<`${Partial}7`, Next>
                  : Source extends `8${infer Next}`
                    ? ParseNumber_internal<`${Partial}8`, Next>
                    : Source extends `9${infer Next}`
                      ? ParseNumber_internal<`${Partial}9`, Next>
                      : [Partial, Source];

type ParseNumber<Source extends string> = string extends Source
  ? Error_UnexpectedGenericString
  : ParseNumber_internal<'', Source> extends ['', Source]
    ? ParserError<'Invalid number', Source>
    : ParseNumber_internal<'', Source> extends [`${infer Number}`, `${infer Next}`]
      ? [N_NumericLiteral<Number>, EatWhitespaces<Next>]
      : Error_Unreachable;

type ParsePrimaryExpression_parenthesized<Source extends string> = string extends Source
  ? Error_UnexpectedGenericString
  : ParsePrimaryExpression_parenthesized_continue<ParseAdditiveExpression<Source>>;

type ParsePrimaryExpression_parenthesized_continue<Result extends [object, string] | ParserErrorBase> = Result extends [object, string]
  ? string extends Result[1]
    ? Error_UnexpectedGenericString
    : Result[1] extends `)${infer Next}`
      ? [Result[0], EatWhitespaces<Next>]
      : Error_Expected<')', 'ParenthesizedExpression', Result[1]>
  : Result;

type ParsePrimaryExpression<Source extends string> = string extends Source
  ? Error_UnexpectedGenericString
  : Source extends `(${infer Next}`
    ? ParsePrimaryExpression_parenthesized<EatWhitespaces<Next>>
    : ParseNumber<Source>;

type ParseMultiplicativeExpression<Source extends string> = string extends Source
  ? Error_UnexpectedGenericString
  : ParsePrimaryExpression<Source> extends [infer Left, `*${infer PartialNext}`]
    ? ParseMultiplicativeExpression<EatWhitespaces<PartialNext>> extends [infer Right, `${infer Next}`]
      ? [N_BinaryExpression<'*', Left, Right>, EatWhitespaces<Next>]
      : Error_Expected<'Expression', '*', PartialNext>
    : ParsePrimaryExpression<Source> extends [infer Left, `/${infer PartialNext}`]
      ? ParseMultiplicativeExpression<EatWhitespaces<PartialNext>> extends [infer Right, `${infer Next}`]
        ? [N_BinaryExpression<'/', Left, Right>, EatWhitespaces<Next>]
        : Error_Expected<'Expression', '/', PartialNext>
      : ParsePrimaryExpression<Source> extends [infer Left, `%${infer PartialNext}`]
        ? ParseMultiplicativeExpression<EatWhitespaces<PartialNext>> extends [infer Right, `${infer Next}`]
          ? [N_BinaryExpression<'%', Left, Right>, EatWhitespaces<Next>]
          : Error_Expected<'Expression', '%', PartialNext>
        : ParsePrimaryExpression<Source>;

type ParseAdditiveExpression<Source extends string> = string extends Source
  ? Error_UnexpectedGenericString
  : ParseMultiplicativeExpression<Source> extends [infer Left, `+${infer PartialNext}`]
    ? ParseAdditiveExpression<EatWhitespaces<PartialNext>> extends [infer Right, `${infer Next}`]
      ? [N_BinaryExpression<'+', Left, Right>, EatWhitespaces<Next>]
      : Error_Expected<'Expression', '+', PartialNext>
    : ParseMultiplicativeExpression<Source> extends [infer Left, `-${infer PartialNext}`]
      ? ParseAdditiveExpression<EatWhitespaces<PartialNext>> extends [infer Right, `${infer Next}`]
        ? [N_BinaryExpression<'-', Left, Right>, EatWhitespaces<Next>]
        : Error_Expected<'Expression', '-', PartialNext>
      : ParseMultiplicativeExpression<Source>;

// type Parse_UnwrapResult<Result extends [object, string] | ParserErrorBase> = Result extends [object, string]
//   ? string extends Result[1]
//     ? Error_UnexpectedGenericString
//     : EatWhitespaces<Result[1]> extends ''
//       ? Result[0]
//       : ParserError<'Unexpected token', Result[1]>
//   : Result;

// type Parse<Source extends string> = string extends Source
// ? Error_UnexpectedGenericString
// : Parse_UnwrapResult<ParseAdditiveExpression<EatWhitespaces<Source>>>;

// type AST = Parse<'4 / 4 + 1 * 8'>;
// type Right = AST['right'];
