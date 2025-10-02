#!/usr/bin/env python3
"""
Simple script to play ulala.wav sound file.
Requires pygame library: pip install pygame
"""

import pygame
import os
import sys

def play_sound(sound_file):
    """Play a sound file using pygame."""
    if not os.path.exists(sound_file):
        print(f"Error: Sound file '{sound_file}' not found!")
        sys.exit(1)

    # Initialize pygame mixer
    pygame.mixer.init()

    # Load and play the sound
    try:
        sound = pygame.mixer.Sound(sound_file)
        sound.play()

        # Wait for the sound to finish playing
        while pygame.mixer.get_busy():
            pygame.time.Clock().tick(10)
    except Exception as e:
        print(f"Error playing sound: {e}")
        sys.exit(1)

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    sound_file = os.path.join(script_dir, "ulala.wav")
    play_sound(sound_file)
