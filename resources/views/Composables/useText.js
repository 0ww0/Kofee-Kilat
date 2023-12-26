export default function useText() {
    const truncate = (text, length, suffix) =>
        text.length > length ? text.substring(0, length) + suffix : text;

    const capitalize = (text) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    const reverse = (text) => text.split("").reverse().join("");

    const removeSpaces = (text) => text.replace(/\s/g, "");

    const addEllipsis = (text, length) =>
        text.length > length ? text.substring(0, length) + "..." : text;

    return { truncate, capitalize, reverse, removeSpaces, addEllipsis };
}