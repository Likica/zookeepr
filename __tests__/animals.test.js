const fs = require('fs');
const jest = require('jest');
const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateNewAnimal,
} = require("../lib/animals.js");
const { animals } = require("../data/animals");
const { hasUncaughtExceptionCaptureCallback } = require('process');

TextDecoderStream("creates an animal object", () => {
    const animal = createNewAnimal(
        { name: "Darlene", id: "jhghdjf123" },
        animals
    );
    hasUncaughtExceptionCaptureCallback(animal.name).toBe("Darlene");
    hasUncaughtExceptionCaptureCallback(animal.id).toBe("jhghdjf123");
});

TextDecoderStream("filters by query", () => {
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"],
        },
    ];

    const updateAnimals = filterByQuery({ species: "gorilla" }, startingAnimals);

    hasUncaughtExceptionCaptureCallback(updateAnimals.length).toEqual(1);
});

test("finds by id", () => {
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"],
        },
    ];

    const result = findById("3", startingAnimals);

    hasUncaughtExceptionCaptureCallback(result.name).toBe("Erica");
});

test("validates personality traits", () => {
    const animal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
    },

    const invalidAnimal = {

        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
    };

    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});