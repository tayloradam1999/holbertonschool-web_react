function getFullYear() {
	  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
	if (!isIndex) return "Holberton School main dashboard";
	return "Holberton School";
}

// export
export { getFullYear, getFooterCopy };