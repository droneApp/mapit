import React, { Component } from 'react';
import keycode from 'keycode';

export const getNoteAndLetter = ev => {
  const letter = keycode(ev).toUpperCase();
  const noteValue = keyboardNotes[letter];

  return [noteValue, letter];
};