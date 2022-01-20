import React, { useState, useContext, useEffect } from "react";
import {
  ButtonSend,
  Container,
  Form,
 
  InputEdit,
 
  SelectEdit,
  TextArea,
} from "../layout/Layout";
 
 
import petContext from "../../context/pet/petContext";
import { css } from "@emotion/css";
import { useParams } from "react-router-dom";
const PetEdit = () => {
  const PetContext = useContext(petContext);
  const {
   
    currentpet,
    getAnimalType,
  
    updatePet,
    animalTypes,
    getPetById,
  } = PetContext;
  let params = useParams();
  useEffect(() => {
    getAnimalType();
    getPetById(params.id);
  }, []);
  const [file, setFile] = useState();
  const [pet, setPet] = useState({
    id: params.id,
    name: currentpet.name,
    animalType: currentpet.animalType,
    adoptionStatus: currentpet.adoptionStatus,
    height: currentpet.height,
    weight: currentpet.weight,
    color: currentpet.color,
    bio: currentpet.bio,
    hypoallergenic: currentpet.hypoallergenic,
    dietaryRestrictions: currentpet.dietaryRestrictions,
    breed: currentpet.breed,
  });

  const {
    name,
    animalType,
    adoptionStatus,
    height,
    weight,
    color,
    bio,
    hypoallergenic,
    dietaryRestrictions,
    breed,
  } = pet;
  const handleChange = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("animalType", animalType);
    formData.append("adoptionStatus", adoptionStatus);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("color", color);
    formData.append("bio", bio);
    formData.append("hypoallergenic", hypoallergenic);
    formData.append("dietaryRestrictions", dietaryRestrictions);
    formData.append("breed", breed);

    updatePet(params.id, formData);
  };
  return (
    <Container>
      <Form
        className={css`
          background-color: #fff;
        `}
        onSubmit={handleSubmit}
      >
        <div
          className={css`
            text-align: end;
            &:hover {
              cursor: pointer;
            }
          `}
        ></div>
        <div>
          <div>
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="name"
            >
              Name
            </label>
            <InputEdit
              type="text"
              id="name"
              name="name"
              value={name || ` ${currentpet.name}`}
              placeholder="Pet Name"
              onChange={handleChange}
            />
          </div>
          <div
            className={css`
              margin-bottom: 4rem;
            `}
          >
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="animalType"
            >
              Type
            </label>
            <SelectEdit
              type="text"
              id="animalType"
              name="animalType"
              value={animalType || `${currentpet.animalType}`}
              onChange={handleChange}
              placeholder="Pet Type"
            >
              <option value="">--Select Type--</option>
              {animalTypes.map((type) => (
                <option key={type.types} value={type.types}>
                  {type.types}
                </option>
              ))}
            </SelectEdit>
          </div>
          <div
            className={css`
              margin-bottom: 4rem;
            `}
          >
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="adoptionStatus"
            >
              Adoption Status
            </label>
            <InputEdit
              type="text"
              id="adoptionStatus"
              placeholder="Pet Adoption Status"
              name="adoptionStatus"
              value={adoptionStatus || ` ${currentpet.adoptionStatus}`}
              onChange={handleChange}
            />
          </div>
          <div
            className={css`
              margin-bottom: 4rem;
            `}
          >
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="color"
            >
              Color
            </label>
            <input
              type="color"
              id="color"
              placeholder="Pet Color"
              name="color"
              value={color || `${currentpet.color}`}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="breed"
            >
              Breed
            </label>
            <InputEdit
              type="text"
              id="breed"
              placeholder="Pet Breed"
              name="breed"
              value={breed || ` ${currentpet.breed}`}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="validatePassword"
            >
              Pet Picture
            </label>
            <input
              onChange={handleChangeFile}
              type="file"
              id="picture"
              placeholder="Pet Picture"
            />
          </div>
          <div
            className={css`
              margin-bottom: 4rem;
            `}
          >
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="height"
            >
              Height
            </label>
            <InputEdit
              type="number"
              id="height"
              placeholder="Pet Height"
              name="height"
              value={height || `${currentpet.height}`}
              onChange={handleChange}
            />
          </div>

          <div
            className={css`
              margin-bottom: 4rem;
            `}
          >
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="dietaryRestrictions"
            >
              Dietary Restrictions
            </label>
            <InputEdit
              type="text"
              id="dietaryRestrictions"
              placeholder="Pet Dietary Restrictions"
              name="dietaryRestrictions"
              value={dietaryRestrictions || `${currentpet.dietaryRestrictions}`}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="weight"
            >
              Weight
            </label>
            <InputEdit
              type="number"
              id="weight"
              placeholder="Pet Weight"
              name="weight"
              value={weight || `${currentpet.weight}`}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="hypoallergenic"
            >
              Hypoallergenic
            </label>

            <SelectEdit
              id="hypoallergenic"
              placeholder="Pet Hypoallergenic"
              name="hypoallergenic"
              value={hypoallergenic}
              onChange={handleChange}
            >
              <option value="">--Select Yes or No--</option>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </SelectEdit>
          </div>
          <div
            className={css`
              margin-bottom: 4rem;
            `}
          >
            <label
              className={css`
                color: #000;
                display: block;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2rem;
              `}
              htmlFor="bio"
            >
              Bio
            </label>
            <TextArea
              id="bio"
              placeholder="Pet Bio"
              name="bio"
              value={bio || ` ${currentpet.bio}`}
              onChange={handleChange}
            />
          </div>
        </div>
        <ButtonSend type="submit"> Send</ButtonSend>
      </Form>
    </Container>
  );
};

export default PetEdit;
