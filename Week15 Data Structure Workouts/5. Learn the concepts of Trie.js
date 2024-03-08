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
        if(curr.endOfWord && Object.entries(curr.children).length===0){
            return result.push(word)
        }else if(curr.endOfWord){
            result.push(word)
        }
        for(let c in curr.children){
            this.printWords(curr.children[c] , word + c, result)
        }
        return result
    }

    autocomplete(word){
        let curr = this.root, keyword=''
        for(let c of word){
            if(curr.children[c]){
                keyword += c
                curr= curr.children[c]
            }
        }
        if(keyword.length){
            return this.printWords(curr, word)
        }else{
            return 'No suggestions'
        }
    }
}

const trie = new Trie()
trie.insert('jithin')
trie.insert('ponnujithin')
trie.insert('ponnambalan')
console.log(trie.root);
console.log(trie.contains('liston'));
console.log(trie.printWords());
console.log(trie.autocomplete('ji'));