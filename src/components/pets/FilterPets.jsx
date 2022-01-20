import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ButtonAdd, InputEdit, Label, SelectEdit } from "../layout/Layout";
import { css } from "@emotion/css";

const FilterPets = ({
  setFilters,
  setfilter,
  animalTypes,
  getPets,
  location,
}) => {
  //  const [queries, setQueries] = useState("");
  const [inputs, setInputs] = useState({
    animalType: "",
    name: "",
    adoptionStatus: "",
    height: "",
    weight: "",
  });
  const { animalType, name, adoptionStatus, height, weight } = inputs;
  const handleSubmit = (e) => {
    e.preventDefault();

    getPets(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={css`
          margin-top: 2rem;
        `}
      >
        <Label
          className={css`
            text-align: center;
          `}
        >
          Type of Animal
        </Label>
        <SelectEdit
          name="animalType"
          value={animalType}
          id="animalType"
          onChange={(e) => setInputs(e.target.value)}
        >
          <option value="">--Select Animal Type--</option>
          {animalTypes.map((type) => (
            <option key={type.types} value={type.types}>
              {type.types}
            </option>
          ))}
        </SelectEdit>
      </div>
      <div className="">
        {setfilter ? (
          <>
            <span onClick={() => setFilters(false)}>
              Advanced Filters
              <KeyboardArrowDownIcon
                Advanced
                Filters
                sx={{ "&:hover": { cursor: "pointer" } }}
              />
            </span>

            <div
              className={css`
                margin-top: 2rem;
              `}
            >
              <Label
                className={css`
                  text-align: center;
                `}
              >
                Name
              </Label>
              <InputEdit
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setInputs(e.target.value)}
                placeholder="Dog, Cat, Bird..."
              />
            </div>
            <div
              className={css`
                margin-top: 2rem;
              `}
            >
              <Label
                className={css`
                  text-align: center;
                `}
              >
                Adoption Status
              </Label>
              <InputEdit
                type="text"
                name="adoptionStatus"
                id="adoptionStatus"
                value={adoptionStatus}
                onChange={(e) => setInputs(e.target.value)}
                placeholder="Dog, Cat, Bird..."
              />
            </div>
            <div
              className={css`
                margin-top: 2rem;
              `}
            >
              <Label
                className={css`
                  text-align: center;
                `}
              >
                Height
              </Label>
              <InputEdit
                type="text"
                name="height"
                id="height"
                value={height}
                onChange={(e) => setInputs(e.target.value)}
                placeholder="Dog, Cat, Bird..."
              />
            </div>
            <div
              className={css`
                margin-top: 2rem;
              `}
            >
              <Label
                className={css`
                  text-align: center;
                `}
              >
                Weight
              </Label>
              <InputEdit
                type="text"
                name="weight"
                id="weight"
                value={weight}
                onChange={(e) => setInputs(e.target.value)}
                placeholder="Dog, Cat, Bird..."
              />
            </div>
          </>
        ) : (
          <span onClick={() => setFilters(true)}>
            Advanced Filters
            <KeyboardArrowUpIcon sx={{ "&:hover": { cursor: "pointer" } }} />
          </span>
        )}
        <ButtonAdd type="submit">
          Filter <FilterAltIcon />
        </ButtonAdd>
      </div>
    </form>
  );
};

export default FilterPets;
