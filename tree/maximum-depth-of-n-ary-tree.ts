/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: _Node | null): number {
    if (!root) {
        return 0;
    }

    // Use a queue for BFS. Store pairs of [node, level]
    const queue: [_Node, number][] = [[root, 1]];
    let maxDepthFound: number = 0;

    while (queue.length > 0) {
        const [currentNode, currentLevel] = queue.shift()!; // Dequeue the first element

        // Update the maximum depth found so far
        maxDepthFound = Math.max(maxDepthFound, currentLevel);

        // Add all children to the queue with their incremented level
        if (currentNode.children) {
            for (const child of currentNode.children) {
                queue.push([child, currentLevel + 1]);
            }
        }
    }

    return maxDepthFound;
};