import styles from "./Modal.module.css";

export default function Modal({
  modalIsOpen,
  setModalIsOpen,
  setName,
  inputValue,
  setInputValue,
}) {
  const handleNameChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setName(inputValue);
    setModalIsOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      setName(inputValue);
      setModalIsOpen(false);
    }
  };

  return (
    <>
      {modalIsOpen && (
        <div className={styles.modal}>
          <div className={styles.container}>
            <h1>Please enter your name:</h1>
            <input
              type="text"
              className={styles.input}
              onChange={handleNameChange}
              onKeyDown={onKeyDown}
            />
            <button className={styles.btn} onClick={handleSubmit}>
              Apply
            </button>
          </div>
        </div>
      )}
    </>
  );
}
