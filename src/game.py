from src.situation import Situation


class Game:
    def __init__(self):
        self.situation = Situation()

    def start(self):
        print(self.situation.describe())
        # self.beginInteration()

    def setPlayer(self, player):
        self.player = player

    def setRoom(self, room):
        self.situation.setRoom(room)
