function getFilesToBackup(lastBackup, changes) {
  return changes.reduce((prev, nextChange) => {
    const [id, date] = nextChange;

    if (date <= lastBackup || prev.includes(id)) return prev;

    return [...prev, id];
  }, []).sort((prevId, nextId) => prevId - nextId);
}


module.exports = getFilesToBackup;
