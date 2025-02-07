import Dropdown from "react-bootstrap/Dropdown";

function DropdownTv() {
  return (
    <Dropdown className="ms-4 mt-1">
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        className="btn btn-secondary btn-sm dropdown-toggle rounded-0 bg-black"
      >
        Genres
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownTv;
