class Situation():
    def setRoom(self, room):
        self.room = room

    def describe(self):
        return self.room.overview
