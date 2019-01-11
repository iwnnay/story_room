class StartingRoom:
    overview = 'You awake in a room, with no doors and no windows'

    def __init__(self):
        self.visited = False
        self.location = 1
        self.doors = None
