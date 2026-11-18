(function (root) {
  'use strict';
  const dictionary = {
    names: ['Julián','Adriana','Marcos','Elena','Roberto','Sonia','Ricardo','Paola','Fernando','Marta'],
    companies: ['TechCorp','GlobalSoft','Innovatech','DataSystems','AlphaGroup','OmegaSolutions'],
    emails: ['usuario','contacto','info','admin','personal','correo','test','soporte'],
    domains: ['gmail.com','outlook.com','empresa.com','servidor.net','webmail.org']
  };
  function escapeRegex(value) {
    return String(value).replace(/[.*+?^\${}()|[\]\\]/g, '\\$&');
  }
  function generateRandom(base) {
    const value = String(base || '');
    const list = value.includes('.') || value === value.toUpperCase() ? dictionary.companies : dictionary.names;
    return list[Math.floor(Math.random() * list.length)];
  }
  function generateFakeEmail() {
    return dictionary.emails[Math.floor(Math.random() * dictionary.emails.length)] +
      Math.floor(Math.random() * 99) + '@' +
      dictionary.domains[Math.floor(Math.random() * dictionary.domains.length)];
  }
  function regex(value, wholeWord) {
    const escaped = escapeRegex(value);
    return new RegExp(wholeWord
      ? '(?<![\\p{L}\\p{N}_])' + escaped + '(?![\\p{L}\\p{N}_])'
      : escaped, 'giu');
  }
  function replace(options) {
    let text = String(options.text || '');
    const mappings = options.wordMappings || {};
    const emailMappings = Object.assign({}, options.emailMappings || {});
    const applied = [];
    Object.values(mappings).filter(m => m && typeof m.original === 'string' && m.original.length)
      .sort((a,b) => b.original.length - a.original.length).forEach(m => {
        const re = regex(m.original, options.wholeWord !== false);
        if (re.test(text)) {
          text = text.replace(re, () => m.replacement);
          applied.push(m.original + ' → ' + m.replacement);
        }
      });
    if (options.replaceAllEmails) {
      const re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
      text = text.replace(re, match => {
        if (!emailMappings[match]) emailMappings[match] = generateFakeEmail();
        applied.push(match + ' → ' + emailMappings[match]);
        return emailMappings[match];
      });
    }
    return { text, applied, emailMappings };
  }
  function restore(options) {
    let text = String(options.text || '');
    const applied = [];
    const emailMappings = options.emailMappings || {};
    Object.entries(emailMappings).forEach(([original, fake]) => {
      const re = new RegExp(escapeRegex(fake), 'g');
      if (re.test(text)) {
        text = text.replace(re, original);
        applied.push(fake + ' → ' + original);
      }
    });
    Object.values(options.wordMappings || {}).forEach(m => {
      if (!m || typeof m.replacement !== 'string' || !m.replacement.length) return;
      const re = regex(m.replacement, options.wholeWord !== false);
      if (re.test(text)) {
        text = text.replace(re, m.original);
        applied.push(m.replacement + ' → ' + m.original);
      }
    });
    return { text, applied, emailMappings: Object.assign({}, emailMappings) };
  }
  root.ReplacerCore = Object.freeze({ replace, restore, generateRandom, generateFakeEmail, escapeRegex });
})(typeof window !== 'undefined' ? window : globalThis);
