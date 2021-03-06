"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanReply = void 0;
function cleanReply(s) {
    return (s ? s.split('\n')
        .filter(function (item) { return item.includes('Posted using [Partiko') === false; })
        .filter(function (item) { return item.includes('Posted using [Dapplr') === false; })
        .filter(function (item) { return item.includes('Posted Using [LeoFinance') === false; })
        .filter(function (item) { return item.includes('Posted via [neoxian') === false; })
        .filter(function (item) { return item.includes('Posted with [STEMGeeks') === false; })
        .filter(function (item) { return item.includes('<center><sub>[Posted Using Aeneas.Blog') === false; })
        .filter(function (item) { return item.includes('<center><sub>Posted via [weedcash.network') === false; })
        .filter(function (item) { return item.includes('<center>Posted on [NaturalMedicine.io') === false; })
        .join('\n') : '')
        .replace('Posted via <a href="https://d.buzz" data-link="promote-link">D.Buzz</a>', '');
}
exports.cleanReply = cleanReply;
//# sourceMappingURL=clean-reply.method.js.map