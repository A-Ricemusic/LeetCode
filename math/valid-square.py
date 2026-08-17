class Solution:
    def distance(self, p1, p2):
        # Distance formula: √((x2 - x1)^2 + (y2 - y1)^2), but without sqrt for comparison
        return (p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2

    def validSquare(self, p1, p2, p3, p4):
        # Calculate distances between all pairs of points
        distances = [
            self.distance(p1, p2),
            self.distance(p1, p3),
            self.distance(p1, p4),
            self.distance(p2, p3),
            self.distance(p2, p4),
            self.distance(p3, p4)
        ]
        
        # Sort the distances
        distances.sort()
        
        # A square has 4 equal sides and 2 equal diagonals
        # The smallest 4 values should be equal (sides), and the largest 2 values should be equal (diagonals)
        return (
            distances[0] > 0 and
            distances[0] == distances[1] == distances[2] == distances[3] and
            distances[4] == distances[5]
        )

        