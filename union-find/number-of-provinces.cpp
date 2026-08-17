class Solution {
public:
    void dfs(unordered_set<int>& visited, vector<vector<int>>& isConnected, int currNode) {
        if (visited.contains(currNode)) return;

        visited.insert(currNode);
        for (int i = 0; i < isConnected[currNode].size(); i++) {
            if (isConnected[currNode][i] != 1) continue;

            dfs(visited, isConnected, i);
        }
    }

    int findCircleNum(vector<vector<int>>& isConnected) {
        unordered_set<int> visited;

        int numProvinces = 0;
        for (int i = 0; i < isConnected.size(); i++) {
            if (visited.contains(i)) continue;

            dfs(visited, isConnected, i);
            numProvinces++;
        }
        return numProvinces;
    }
};