const slugify = (str: string, _replacer = '-') =>
  // str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  str
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim() // Remove whitespace from both sides of a string
    .replace(/&/g, 'and') // Replace & with and
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -

export default slugify;
