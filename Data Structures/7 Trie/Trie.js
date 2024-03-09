class TrieNode{
    constructor() {
        this.children={}
        this.endOfWord= false
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode()
    }

    insert(word){
        let curr= this.root
        for(let c of word){
            if(!curr.children[c]) curr.children[c]= new TrieNode()
            curr= curr.children[c]
        }
        curr.endOfWord = true
    }// Time: O(l) length of word | Space: O(l) length of word

    printAllWords(curr= this.root, word='', result=[]){
        if(curr.endOfWord && Object.entries(curr.children).length===0){
            return result.push(word)
        }else if(curr.endOfWord){
            result.push(word)
        }

        for(let c in curr.children){
            this.printAllWords( curr.children[c] , word+c, result  )
        }
        return result
    }// Time: O(n) no.of characters | Space:  O(n) no.of characters

    suggestion(word){
        let curr = this.root, keyword=''
        for(let c of word){
            if(curr.children[c]){
                keyword+=c
                curr= curr.children[c]
            }
        }
        return this.printAllWords(curr, keyword)
    }// Time: O(m + n) m- length of input word, n- no.of characters stored

}

const trie= new Trie()
trie.insert('Liston')
trie.insert('Fermi')
trie.insert('Lis')
trie.insert('Akil')
trie.insert('Akash')
trie.insert('Aravind')
// console.log(trie.printAllWords());
console.log(trie.suggestion('A'));