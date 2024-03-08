class TrieNode{
    constructor(){
        this.children={}
        this.endOfWord= false
    }
}

class Trie{
    constructor(){
        this.root= new TrieNode()
    }

    insert(word){
        let curr= this.root
        for(let c of word){
            if(!curr.children[c]) curr.children[c] = new TrieNode()
            curr= curr.children[c]
        }
        curr.endOfWord = true
    }

    contains(word){
        let curr = this.root
        for(let c of word){
            if(!curr.children[c]) return false
            curr= curr.children[c]
        }
        return curr.endOfWord
    }

    printWords(curr= this.root, word='', result=[]  ){
        if(curr.endOfWord) return result.push(word)

        for(let c in curr.children){
            this.printWords(curr.children[c] , word + c, result)
        }
        return result
    }
}

const trie = new Trie()
trie.insert('lis')
trie.insert('liy')
console.log(trie.root);
console.log(trie.contains('liy'));
console.log(trie.printWords());
