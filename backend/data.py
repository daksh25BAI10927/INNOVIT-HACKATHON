

class HeritageStore:
    def __init__(self):
        self.places = {}

    def enrich_place(self, place):
        place.setdefault("tickets", {
            "indian": 40,
            "student": 20,
            "foreigner": 600
        })
        place.setdefault("avg_time", 2)
        place.setdefault("best_season", "Oct–Mar")
        place.setdefault("crowd_level", "medium")
        return place

    def add_place(self, key, place_data):
        self.places[key] = self.enrich_place(place_data)

    def add_bulk(self, places_dict):
        for key, data in places_dict.items():
            self.add_place(key, data)

    def get_all(self):
        return list(self.places.values())

    def get_place(self, key):
        return self.places.get(key)

from delhi_places import delhi_places
store = HeritageStore()
store.add_bulk(delhi_places)

