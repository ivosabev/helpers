export const slugify = (str: string, replacer = '-') =>
  str
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim() // Remove whitespace from both sides of a string
    .replace(/&/g, 'and') // Replace & with and
    .replace(/\s+/g, replacer) // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(new RegExp(`${replacer}${replacer}+`, 'g'), '-'); // Replace multiple - with single
