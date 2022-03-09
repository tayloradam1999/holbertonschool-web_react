function getFullYear() {
	  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
	if (!isIndex) return "Holberton School main dashboard";
	return "Holberton School";
}

function getLatestNotification() {
	return {
		__html: '<strong>Urgent requirement</strong> - complete by EOD'
	}
}

// export
export { getFullYear, getFooterCopy, getLatestNotification };