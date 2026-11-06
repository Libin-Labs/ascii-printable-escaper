import * as api from '@lp-labs/ascii-printable-escaper';
import { escapeNonAscii } from '@lp-labs/ascii-printable-escaper';
console.log(escapeNonAscii('café😀'));
// @ts-expect-error invalid argument must be rejected by declarations
api.escapeNonAscii(5);
